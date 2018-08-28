#### Stepways to declare an API in Ionic 4

> #### Declare the API credentials in enviroment files:
> **Enviroment Section**
> > In `In src > enviroments > enviroment.ts` use the following commands to declare API credentials
> ```
>  apiUrl: '[LINK_FOR_THE_PATH_URL]',
>  apiKey: '[KEY_OF_THE_API]'
> ```

> **Creating a Service:**
> > From terminal, create a new service usign `ionic g service [NAME_OF_SERVICE]`
> In `[NAME].service.ts` file, import the enviroment file:
> ```
>   import { environment } from '../environments/environment';
> ```
>> > From terminal, create a new service usign `ionic g service [NAME_OF_SERVICE]`
> In `[NAME].service.ts` file, import the enviroment file:
> ```
>   import { environment } from '../environments/environment';
> ```
 
