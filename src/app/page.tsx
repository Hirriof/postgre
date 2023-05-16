import React from 'react';

export default function Home() {
  async function handleSubmitWhitelist(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/whitelist', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
}


  return (
      <main>
        <div>
          <form onSubmit={handleSubmitWhitelist}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
          </form>
      </div>
    </main>
    
  );
}