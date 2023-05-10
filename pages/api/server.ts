require('node:http');

export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}


//How to fetch from server components

async function getData(){
    const res = await fetch('api goes here')
    //the return v;aue is *not* serialized
    //You can return Data, Map, Set, etc.

    //Recommendation: handle errors
    if(!res.ok) {
        //This will activate the closest 'error.js' Error Boudary\
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function Page(){
    const data = await getData()

    return 
}