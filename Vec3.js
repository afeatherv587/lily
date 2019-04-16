Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}
Vec3.prototype.min=function()
{
    var min;
    min=this.x;
    if(v.y<min){
	min=v.y;
    }
    if(v.z<min){
	min=v.z;
    }
	return min;
}
Vec3.prototype.mid=function()
{
    var mid;
    mid=this.x;
    if(v.y<mid){
	if(v.y>v.z){
	    mid=v.y;
	}
    }
    if(v.y>mid)
	if(v.y<v.z){
	    mid=v.y;
	}
    if(v.z<mid){
	if(v.z>v.y){
	    mid=v.z;
	}
    }
    if(v.z>mid){
	if(v.z<v.y){
	    mid=v.z;
	}
    return mid;
    }
}
Vec3.prototype.max=function()
{
    var max;
    max=this.x;
    if(v.y>max){
	max=v.y;
    }
    if(v.z>max){
	max=v.z;
    }
	return max;
}
