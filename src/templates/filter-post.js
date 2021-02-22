
function filterPostEvery(l, filterTag){
    var filtered_l = l.filter(function(item){
       return(
           filterTag.every(function(tg){
               if (item.node.frontmatter.tags.includes(tg)) 
                   { return(true) } 
                   else { return(false) }
           })
       )
   }
   )
   return (filtered_l)
  }
  

function filterPostSome(l, filterTag){
    var filtered_l = l.filter(function(item){
       return(
           filterTag.some(function(tg){
               if (item.node.frontmatter.tags.includes(tg)) 
                   { return(true) } 
                   else { return(false) }
           })
       )
   }
   )
   return (filtered_l)
  }

export {filterPostEvery , filterPostSome }