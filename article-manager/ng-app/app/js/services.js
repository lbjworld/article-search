(function(){

'use strict';

/* Services */

angular.module('compositionAppServices', ['ngResource'])
.factory('authService', ['$http',
    function($http) {
        var baseUrl = "/backend/api-token-auth";
        return {
            signin: function(data, success, error) {
                $http.post(baseUrl + '/signin/', data)
                    .success(success)
                    .error(error);
            },
            me: function(userid, success, error) {
                $http.get(baseUrl + '/me/' + userid + '/')
                    .success(success)
                    .error(error);
            },
            logout: function(success) {
                success();
            }
        };
    }
])
.factory('compositionService', ['$resource',
    function($resource) {
        return $resource('/backend/composition/', {
            'format': 'json'
        }, {
            get_add_meta: {
                url: '/backend/composition/',
                method: 'OPTIONS'
            },
            get_edit_meta: {
                url: '/backend/composition/:compositionId/',
                method: 'OPTIONS'
            },
            get_detail: {
                url: '/backend/composition/:compositionId/',
                method: 'GET'
            },
            put_detail: {
                url: '/backend/composition/:compositionId/',
                method: 'PUT'
            },
            put_image: {
                url: '/backend/composition/image/:compositionId/',
                method: 'PUT',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        });
    }
]);

})();
