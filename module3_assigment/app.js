(function () {
'use strict';


angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItemsDirective);

function foundItemsDirective()
{
	var ddo={
		templateUrl:'foundItem.html',
		scope:{
			found:'<',
			onRemove:'&'
		},
		controller:NarrowItDownController,
		controllerAs:'list',
		bindToController:true
		
	};
	console.log("ddo is",ddo);
	return ddo;
}

NarrowItDownController.$inject=['MenuSearchService','$scope'];

function NarrowItDownController(MenuSearchService,$scope)
{
	var list=this;
	
	list.getItem=function()
	{
		list.found=[];	
		list.errormessage="";
		var promise=MenuSearchService.getMatchedMenuItems($scope.searchTerm);
	promise.then(function(result)
{
		
	list.found=result;
	if(list.found.length<=0)
	{
		list.errormessage="Nothing can be found";
	}
	
	
})	
.catch(function(error)
{
	console.log("error caught");
	list.errormessage="Nothing can be found";
});

	}
	
	list.removeItem=function(index)
	{
		list.found.splice(index,1);
		if(list.found.length<=0)
		{
			list.errormessage="Nothing can be found";
		}
	};
	
	
}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http)
{
	var service=this;
	var founditems=[];
	var value;
	var str="Nothing found";
	service.getMatchedMenuItems=function(searchTerm)
	{
		return $http({
			method:"GET",
			url:"https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function(response)
		{
			
			founditems=[];
			if(searchTerm)
			{
				for(var i=0;i<response.data.menu_items.length;i++)
				{
					
					value=response.data.menu_items[i].description;
					
					value=value.toLowerCase();
					

					if(value.indexOf(searchTerm.toLowerCase())>=0)
					{	
						founditems.push(response.data.menu_items[i]);
					}
				}
			}
				
		return founditems;
		
	});
	
};
}


})();