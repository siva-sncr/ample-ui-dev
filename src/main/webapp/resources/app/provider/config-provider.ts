import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

@Injectable()

export class Config {
    private _config: Object;
    
    constructor(private http: Http) {}
    
    loadConfig: function(){
        
        return new Promise((resolve, reject) { 
            
        });
        
        return $http.get('config.yml').success(function(data){
					try{
						var parsed = jsyaml.safeLoad(data);
						config = parsed;
						console.log("Config loaded succesfully:", config);
					}catch(e){
						console.log("Error while parsing config:", e);
					}
				}).error(function(data){
					console.log("Failed to application config:", arguments);
				});

			},
};