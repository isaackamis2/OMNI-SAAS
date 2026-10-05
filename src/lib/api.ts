/*
======================================================
 PLATFORM DEVELOPED BY: Isiaka Kamana (Isaac)
 Role: Lead Web Developer & Database Architect
 Website: https://x.com/isaackamis2
 Contact: isaackamis@gmail.com
======================================================
*/

const API_BASE_URL =
  process.env.NEXT_PUBLIC_OMNI_API_URL || 'https://omni-api-43uh.onrender.com';

export async function queryIntel(query: string, apiKey: string = 'omni_test_free_key_123') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/intel?query=${encodeURIComponent(query)}`, {
      headers: {
        'x-api-key': apiKey,
      },
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      error: 'Unable to connect to OMNI-API backend service. Ensure API server is running on port 4000.',
    };
  }
}

export async function analyzeSentiment(text: string, apiKey: string = 'omni_test_free_key_123') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/sentiment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({ text }),
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      error: 'Failed to communicate with Sentiment endpoint.',
    };
  }
}

export async function generateBriefing(content: string, apiKey: string = 'omni_test_free_key_123') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({ content, maxBullets: 3 }),
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      error: 'Failed to communicate with Summarize endpoint.',
    };
  }
}

export async function requestApiKey(email: string, tier: 'free' | 'pro' = 'free') {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/keys/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, tier }),
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      error: 'Failed to generate API Key.',
    };
  }
}
