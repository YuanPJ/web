call create-react-app %1
call cd %1
call npm install --save material-ui 
call npm install --save react-tap-event-plugin
call npm install --save-dev eslint
call npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
call npm install --save-dev eslint-config-airbnb
call copy ..\.eslintrc.js .\
