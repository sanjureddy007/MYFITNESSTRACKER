const List = [
    {workout: "sleep"}
];
function remove(i){
    List.splice(i,1);
    return true;
    };


function addExercise(newsleep) {
    List.push({workout:newsleep});
    return true;
};



module.exports = {
    List,
    remove
    
    
}