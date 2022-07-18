function scroll_to(s) {
    console.log(s);
    $('body').scrollTo('#' + s, 1, { offset: -($("#brand").height() + 20) * x });
  }


  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })


  function checkValid(id){
    s=$("#"+id).val();
    if(s=="") // invalid
    {   
        $("#"+id+"-inv").html('This field is required and cannot be blank') ;
        $("#"+id).removeClass('is-valid');
        $("#"+id).addClass('is-invalid');
        
    }
    else // valid
    {
        $("#"+id).removeClass('is-invalid');
        $("#"+id).addClass('is-valid');

    }
  }

  function refresh_data(){
    data=select_data;
    $("#jobpost").html('');
    for (let i = 0; i < data.length; i++){
      
      $("#jobpost").append('<div class="card col-md-5 m-1 p-3"><div class="btn-flex-1"><h6 class="col-md-6 fw-bold mb-0">'+data[i]['Name']+'</h6> <h6 class="col-md-6 mb-0" style="text-align:end;">'+data[i]['Salary']+'</h6></div><h9 class="mb-2">'+data[i]['Company']+'</h9><div class="tags-box mb-3"><span class="tags"><i class="material-icons">gps_fixed</i>'+data[i]['Location-short']+'</span><span class="tags"><i class="material-icons">face_retouching_natural</i>'+data[i]['Opening']+'</span><span class="tags"><i class="material-icons">school</i>'+data[i]['Edulation']+'</span><span class="tags"><i class="material-icons">home_repair_service</i>'+data[i]['Experience']+'</span></div><div class="btn-flex"><button type="button" class="btn btn-danger btn-sm col-md-3 m-3" onclick="job_select('+i+')">Apply</button><a href="whatsapp://send?text='+data[i]['Share-text']+'"  class="m-2 p-2 col-md-3 share fw-bold link-unstyled" ><span class="material-icons">whatsapp</span><div class="pl-2">Share</div></a></div></div>');
      }
  }
var select_data;
var textdata;

  $(document).ready(function(){
    $.getJSON("jpdata.json", function(data){
        console.log(data); // Prints: Harry
        textdata=data;
        select_data=data;
        refresh_data();
    }).fail(function(){
        console.log("An error has occurred.");
    });
});

function job_select(x){
  $("#Language").html(textdata[x]['Language']);
  $("#Gender").html(textdata[x]['Gender']);
  $("#Location-full").html(textdata[x]['Location-full']);
  $("#Experience").html(textdata[x]['Experience']);
  $("#Education").html(textdata[x]['Education']);
  $("#Description").html(textdata[x]['Description']);
  $("#Education").html(textdata[x]['Education']);
  $('body').scrollTo("#details_form", 1, { offset: -($("#brand").height() + 100)})
}

function search(source, key) {
  var results=[];
  
  key=key.toLowerCase().trim();
  for (let i = 0; i < source.length; i++){
     var f;
     Object.keys(source[i]).forEach((keys) => {
      // console.log(source[i][keys]);
      // console.log(JSON.stringify(source[i][keys]).toLowerCase().trim().includes(key));
      if(JSON.stringify(source[i][keys]).toLowerCase().trim().includes(key)){
        f= "Y" 
      }
      
    });
    console.log(f)
    if(f=="Y"){
      results.push(source[i])
    }

  }
  console.log(results);
  if(results.length==0){
    console.log('Nope');
  }
  else{
    select_data=results;
  }
}


function call_search(){
  k=$("#search").val();
  search(textdata,k);
  refresh_data();
}