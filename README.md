# elcarvajal

https://www.canva.com/design/DAGB7tvvgsc/CkgnTNE0oUI6-OTkY-p5Kw/view?utm_content=DAGB7tvvgsc&utm_campaign=designshare&utm_medium=link&utm_source=editor 

docker build -t portal-web-img:0.0.1 .

 docker run -dit --name portal-web -p 8900:80 -v $PWD:/var/www/localhost/htdocs/portal-web portal-web-img:0.0.1
