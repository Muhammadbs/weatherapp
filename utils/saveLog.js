const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function saveLog(city, response, ip) {
  const { data, error } = await supabase
    .from('weather_logs')
    .insert([{ city, response, ip }]);

  if (error) {
    console.error('Error saving to Supabase:', error);
  } else {
    console.log('Saved log to Supabase:', data);
  }
}

module.exports = saveLog;
