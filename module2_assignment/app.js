(function()
{
	angular.module('ShoppingListCheckoff',[])
	.controller('ToBuyController',ToBuyContoller)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckoffService',ShoppingListCheckoffService);
	ToBuyContoller.$inject=['ShoppingListCheckoffService'];
	function ToBuyContoller(ShoppingListCheckoffService)
	{
		var list=this;//list the the controller as syntax used in the html file.
		//list.errormessage="";
		list.items=ShoppingListCheckoffService.getItems();
		//console.log(list.items);
		//list.mylength=ShoppingListCheckoffService.getLength();
		list.removeItem=function(index)
		{
			ShoppingListCheckoffService.remove(index);
			if(list.items.length==0)
		{
			list.errormessage="Everything has been bought";
		}
		
		};
		
	}
	AlreadyBoughtController.$inject=['ShoppingListCheckoffService'];
	function AlreadyBoughtController(ShoppingListCheckoffService)
	{
		var list_2=this;
		
		list_2.myitems= ShoppingListCheckoffService.getMyItems();
		list_2.length=list_2.myitems.length;
		console.log(list_2.length);
		
		list_2.message="Nothing has been bought yet";
		list_2.getLength=
		function()
		{
		if(ShoppingListCheckoffService.getLength())
		{
			list_2.message="";
			return 1;
		}
					else
			{
				return 0;
			}	
		};
		
		
		
	}
	function ShoppingListCheckoffService()
	{
		var service=this;
		var boughtlist=[];
		var todolist=[
		{
			name:"cookies",
			quantity:10
		},
		{
			name:"pepsi",
			quantity:5
		},
		{
			name:"wafers",
			quantity:2
		},
		{
			name:"apples",
			quantity:6
		},
		{
			name:"bananas",
			quantity:8
		},
		{
			name:"bread",
			quantity:10
		}
		];
		service.getItems=function()
		{
			return todolist;
		};
		service.remove=function(index)
		{
				boughtlist.push(todolist[index]);
			todolist.splice(index,1);
			AlreadyBoughtController.message="";
		};
		service.getMyItems=function()
		{
			return boughtlist;
		};
		service.getLength=function()
		{
			return boughtlist.length;
		}
		
	}
	
})();