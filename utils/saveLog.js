const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const saveToSupabase = async (ip, weatherData, suggestion) => {
  const data = {
    ip_address: ip,
    timestamp: new Date().toISOString(),
    weather_data: weatherData,
    suggestion: suggestion || null,
  };

  const { error } = await supabase.from('api_requests').insert([data]);

  if (error) {
    console.error("Failed to save to Supabase:", error.message);
  } else {
    console.log("Request logged to Supabase");
  }
};

module.exports = saveToSupabase;