import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        
        const requestData = await req.json();
        
        const server=await db.feedback.create({
            data:{
                email:requestData.data.email,
                name:requestData.data.name,
                message:requestData.data.message
            }
        })
        return NextResponse.json(server)
        
        
        
       
        
        
        
    } catch (error) {
        
        console.error("Error handling POST request:", error);
        
        return NextResponse.error();
    }
}