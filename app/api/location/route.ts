import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
   try {
    const locations=await prisma.location.findMany()
    return NextResponse.json({message:"Successfully fetched location",locations},{status:200})

   } catch (error) {
    return NextResponse.json({e:error},{status:500})
    
   }
}

export async function POST(req:NextRequest){
    try {
        const {name,zipCode}=await req.json();
        if(!name){
        return NextResponse.json({error:"Location Name is required"},{status:403})
        }
        if(!zipCode){
            return NextResponse.json({error:"ZipCode is required"},{status:403})
            }
            const newLocation=await prisma.location.create({
                data:{
                    name,zipCode
                }
            });
            return NextResponse.json({message:"Successfully created location"},{status:200})
        
    } catch (error) {
        return NextResponse.json({e:error},{status:500})
    }
}