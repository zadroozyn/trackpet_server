echo "installing dependencies..."
sudo npm install forever -g
npm install mongoose
npm install express
npm install body-parser
echo "strating server on port [number]..."
forever start app.js
