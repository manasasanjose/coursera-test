(function () {
	'use strict';
		angular.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheckController);
		LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope)
	{
			$scope.message="";
			$scope.note="";
		$scope.checkLunch=function()
		{
			
			var temp=$scope.items.split(",");
			
			var len=temp.length;
				 temp = temp.filter(function(s) {
    return /\S/.test(s);
});

				
			
			if(temp.length<=0)
			{
				$scope.message="Please enter data first";
				
			}
			 else if(temp.length<=3)
			{
				$scope.message="Enjoy!!";
				if(len>temp.length)
					$scope.note="Not considering empty items.";
				
			}
			else
			{
				$scope.message="Too Much!!";
				if(len>temp.length)
					$scope.note="Not considering empty items.";
			}
				
			
		}
	}
})();