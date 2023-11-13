import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {locationId}=await req.json();
        const users=await prisma.user.findMany({
            where:{
                    locationId
            }
        })
        const message=`Hajur ko location ma fohor lina aako cha kripaya forhor lina aaunu hola `
        const notification=await prisma.notifications.create({
            data:{
                message: message,
            }
        });

        const notificationId=notification.id;
   users.map(async(user) =>{
   
        await prisma.userNotifications.create({
            data:{
                userId: user.id,
                notificationId,
            }
        });
     
     })

    return NextResponse.json({ message:"Successfully send notification"}, { status: 200 });


        // const notifyUsers=
    } catch (error) {
    return NextResponse.json({ e: error }, { status: 500 });
        
    }
}