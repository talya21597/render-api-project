# Render API Project

אפליקציית Node.js + Express שמציגה את רשימת השירותים מחשבון Render שלך.

## דרישות מקדימות

- Node.js מותקן במחשב
- חשבון Render
- API Key מ-Render

## יצירת API Key ב-Render

1. היכנסי ל-[Render Dashboard](https://dashboard.render.com/)
2. לחצי על Account Settings (בפינה הימנית העליונה)
3. בחרי בטאב "API Keys"
4. לחצי על "Create API Key"
5. תני שם ל-API Key ושמרי אותו במקום בטוח

## התקנה והרצה מקומית

1. העתיקי את הפרויקט או שכפלי מ-GitHub

2. התקני את החבילות הנדרשות:
```bash
npm install
```

3. צרי קובץ `.env` על בסיס `.env.example`:
```bash
copy .env.example .env
```

4. ערכי את קובץ `.env` והוסיפי את ה-API Key שלך:
```
RENDER_API_KEY=rnd_your_actual_api_key_here
PORT=3000
```

5. הריצי את השרת:
```bash
npm start
```

6. פתחי בדפדפן: `http://localhost:3000/services`

## Endpoints

- `GET /` - מידע על השרת
- `GET /services` - מחזיר את רשימת כל השירותים מ-Render (כ-JSON)

## פריסה ל-Render

### שלב 1: העלאה ל-GitHub

1. אתחלי Git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. צרי repository חדש ב-GitHub והעלי את הקוד:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### שלב 2: פריסה ב-Render

1. היכנסי ל-[Render Dashboard](https://dashboard.render.com/)
2. לחצי על "New +" ובחרי "Web Service"
3. חברי את ה-GitHub repository שלך
4. הגדרות הפריסה:
   - **Name**: בחרי שם לשירות
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (או לפי צורך)

5. הוסיפי את משתנה הסביבה:
   - לחצי על "Advanced"
   - הוסיפי Environment Variable:
     - **Key**: `RENDER_API_KEY`
     - **Value**: ה-API Key שלך מ-Render

6. לחצי על "Create Web Service"

### שלב 3: בדיקה

לאחר שהפריסה הושלמה, תוכלי לגשת ל:
```
https://your-service-name.onrender.com/services
```

## טכנולוגיות

- **Node.js** - פלטפורמת JavaScript
- **Express** - framework לשרת
- **dotenv** - ניהול משתני סביבה
- **Render API** - גישה לנתוני Render

## הערות חשובות

- אל תשתפי את ה-API Key שלך בקוד או ב-Git
- הקובץ `.env` כבר נמצא ב-`.gitignore` ולא יועלה ל-GitHub
- Render תוסיף אוטומטית את משתנה `PORT` בעת הפריסה

## תיעוד נוסף

- [Render API Documentation](https://api-docs.render.com/reference)
- [Render Deployment Guide](https://render.com/docs/deploy-node-express-app)
