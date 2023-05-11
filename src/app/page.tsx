import { sql } from '@vercel/postgres';

async function create(formData: FormData) {
  'use server';

  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const { rows } = await sql`
    INSERT INTO whitelist ( USERNAME, EMAIL)
    VALUES (
      
        ${formData.get('name')}, 
        'qsdqqqqqqaaaaaasd@gmail.com'
        
      )
  `;
  //redirect(`/product/${rows[0].slug}`);
}

export default function Page() {
  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}