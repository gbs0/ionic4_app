#### Stepways to declare an API in Ionic 4

> #### Declare the API paths in enviroment file:
> > In `In src > enviroments > enviroment.ts` use the following commands to declare API credentials
> ```
>  apiUrl: '[LINK_FOR_THE_PATH_URL]',
>  apiKey: '[KEY_OF_THE_API]'
> ```

> **Creating a Service:**
> > From terminal, create a new service usign `ionic g service [NAME_OF_SERVICE]`
> In `[NAME].service.ts` file, import the enviroment file and a HTTP Client:
> ```
>   import { environment } from '../environments/environment';
>   import { HttpClient } from '@angular/common/http';
> ```
> **Making a Constant**
> In `[NAME].service.ts` file, declare a constant to hold the API url and the API key:
> ```
>   const API_URL = environment.apiUrl;
>   const API_KEY = environment.apiKey;
> ```
> **Making the Constructors**
> In `[NAME].service.ts` file, declare some functions below the class file, to get some data from API:
> ```
>   export class NewsService {
>       constructor(private http: HttpClient) { }
>       getData(url) {
>           return
>       }
>   }
> ``` 
