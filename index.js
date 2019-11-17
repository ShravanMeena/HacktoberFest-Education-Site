 
     
            let total=5;
            let attempt = 0;

            function count() {

                if(document.querySelector('#ans').value=="4")
                    {
                       swal("Good job!", "You are awesome!", "success");
                       attempt++;

                    }
                else
                    {
                        swal("Awww!", "Please Try Again!", "warning");
                    }

                    document.querySelector('#stats').innerHTML =(attempt/total)*100;

            }

        