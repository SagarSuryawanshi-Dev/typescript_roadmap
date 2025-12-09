1. typescript setup project wise prefeered way
2. npm init -y (package.json)
3. npm i -D typscript

4. npx tsc --init => it genrate tsconfig.json,Basically it create configuration for TYPESCRIPT Project. and file tell typescript what to compile,hoe to compile,where to output compiled js,which features are allowed,folder include or excclude,how strict type checking should be,tsconfig.json Rules for how typescript should behave in project.

5. in tsconfig.json file uncomment "rootDir" & "outDir".This means that create two folders src and dist
   "rootDir" this tell TypeScript Only compile Everthing inside the src folder.
   "outDir" put all genrated Javascript Files inti the dist folder.

6. to run first time npx tsc it simply compile your Typescript code into Javascript

7. make index.ts in src wrtie typescript code and with the help of npx tsc it compiled into javascript and in dist folder you will get index.js file .. run command is node dist.index.js
