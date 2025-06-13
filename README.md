weather-app/
├── public/                     # Static files (served to client)
│   ├── css/
│   │   └── styles.css           # App styling (Optional, user-defined)
│   └── js/
│       └── app.js              # Client-side JS: handles form submit, geolocation, AJAX to /weather
│
├── src/
│   └── app.js                  # Main Express server: serves pages, weather API, logs to Supabase
│
├── templates/                  # Handlebars templates for rendering HTML
│   ├── partials/
│   │   └── header.hbs          # Reusable header partial
│   └── views/
│       ├── 404.hbs             # 404 error page
│       └── index.hbs           # Home page (includes weather form)
│
├── utils/
│   ├── saveLog.js              # Saves weather request logs (IP, timestamp, data) to Supabase
│   └── weatherData.js          # Fetches weather data from OpenWeatherMap API
│
├── .env                        # Environment variables (OpenWeatherMap key, Supabase URL/key, PORT)
├── .gitignore                  # Git ignored files (.env, node_modules, etc.)
├── .gitattributes              # Git attributes (text file normalization etc.)
├── package.json                # Project metadata, dependencies, scripts
└── package-lock.json           # Exact package versions for dependency locking
