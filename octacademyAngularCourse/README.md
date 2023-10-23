# octacademyAngularCourse
resource link:
https://youtu.be/CGLdH5ORX-Y


# App deployed to GitHub Pages (gh-pages)
https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4 
    
   ## needed docs to resolve issues coming in deployment 
    ###use aot insted of prod 
    command:  ng build --aot --base-href "https://Shankar-naik-123.github.io/octacademyAngularCourse/"

    ###use --no-silent while runnninng npx command
    command: npx angular-cli-ghpages --dir=dist/ang-intro --no-silent 
     
    ### for Filename too long issue run below command 
      git config --system core.longpaths true  
      Note: Make sure you run above command in command prompt in admin mode 


    https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows

