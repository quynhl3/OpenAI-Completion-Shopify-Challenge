import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [promptInput, setPromptInput] = useState('');
  const [resultResponse, setResultResponse] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promptInput }),
    });
    const data = await response.json();
    setResultResponse(data.result);
    setPromptInput('');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Prompt Generator</title>
      </Head>

      <main className={styles.main}>
        <h3>Generate a Prompt</h3>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='prompt'
            placeholder='Enter a prompt'
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type='submit' value='Generate Prompt' />
        </form>
        <div>{resultResponse}</div>
      </main>
    </div>
  );
}
