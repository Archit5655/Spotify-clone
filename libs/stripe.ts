import Stripe from "stripe";

import { version } from "os";

export const stripe=new Stripe(
    process.env.STRIPE_SECRET_KEY ?? '',
    {
        apiVersion:'2023-08-16',
        appInfo:{
            name:"Spotify Clone video",
            version:'0.1.0'
        }
    }

)