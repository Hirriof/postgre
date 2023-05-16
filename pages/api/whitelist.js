import { sql } from '@vercel/postgres';

async function insertWhitelist(req, res) {

      try {
          console.log("try");      
      } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
    
      return res.status(200).json({ error: "" });
    }
    
    export default insertWhitelist;