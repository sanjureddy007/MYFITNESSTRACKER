const List = [
    {workout: "walk"}
];
function remove(i){
    List.splice(i,1);
    return true;
    };


function addExercise(newwalk) {
    List.push({workout:newwalk});
    return true;
};



module.exports = {
    List,
    remove
    
    
}