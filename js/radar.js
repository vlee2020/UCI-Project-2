
    // Defining datasets for display on radar plot
     var Normal = [77,61,75,64,57];
     var Fire = [69,68,85,71,86]
     var Water = [70,73,75,71,75]
     var Electric = [62,66,74,72,89]
     var Fighting = [71,72,101,68,56]
     var Ground = [71,85,94,64,55]
     var Psychic = [72,71,75,88,99]
     var Rock = [67,98,92,73,61]
     var Dark = [69,65,81,67,71]
     var Steel = [70,117,94,77,70]
     var Grass = [67,72,75,70,75]
     var Ice = [72,71,77,72,69]
     var Poison = [74,76,76,72,67]
     var Flying = [70,64,75,70,74]
     var Bug = [57,72,71,65,56]
     var Ghost = [64,80,74,79,82]
     var Dragon = [82,85,107,85,92]
     var Fairy = [69,68,85,71,86]
    //  Defining Colorsets for display on radar plot
    var ctx = document.getElementById("myChart");
    var data = {
              labels: ["HP","Attack","Defense","Sp.Attack","Sp.Defense","Speed"],
              datasets: [
                 { label: 'Normal',
                 data: Normal,
                 borderColor :['rgba(210, 180, 140, 1)'],
                 hidden: true
           },
                 { label: 'Fire',
                 data: Fire,
                 borderColor :['rgba(255, 0, 0, 1)']
           },
                 { label: 'Water',
                 data: Water,
                 borderColor :['rgba(0, 0, 255, 1)']
           },
                 { label: 'Electric',
                 data: Electric,
                 borderColor :['rgba(255, 255, 0, 1)'],
                 hidden: true
           },
                 { label: 'Fighting',
                 data: Fighting,
                 borderColor :['rgba(128, 0, 0, 1)'],
                 hidden: true
           },
                 { label: 'Ground',
                 data: Ground,
                 borderColor :['rgba(205, 133, 63, 1)'],
                 hidden: true
           },
                 { label: 'Psychic',
                 data: Psychic,
                 borderColor :['rgba(255, 0, 255, 1)'],
                 hidden: true
           },
                 { label: 'Rock',
                 data: Rock,
                 borderColor :['rgba(139, 69, 19, 1)'],
                 hidden: true
           },
                 { label: 'Dark',
                 data: Dark,
                 borderColor :['rgba(0, 0, 0, 1)'],
                 hidden: true
           },
                 { label: 'Steel',
                 data: Steel,
                 borderColor :['rgba(192, 192, 192, 1)'],
                 hidden: true
           },
                 { label: 'Grass',
                 data: Grass,
                 borderColor :['rgba(0, 128, 0, 1)']
           },
                 { label: 'Ice',
                 data: Ice,
                 borderColor :['rgba(70, 130, 180, 1)'],
                 hidden: true
           },
                 { label: 'Poison',
                 data: Poison,
                 borderColor :['rgba(148, 0, 211, 1)'],
                 hidden: true
           },
                 { label: 'Flying',
                 data: Flying,
                 borderColor :['rgba(135, 206, 250, 1)'],
                 hidden: true
           },
                 { label: 'Bug',
                 data: Bug,
                 borderColor :['rgba(127, ,255, 0 , 1)'],
                 hidden: true
           },   
                 { label: 'Ghost',
                 data: Ghost,
                 borderColor :['rgba(75, 0, 130, 1)'],
                 hidden: true
           },
                 { label: 'Dragon',
                 data: Dragon,
                 borderColor :['rgba(139, 0, 139, 1)'],
                 hidden: true
           },
                 { label: 'Fairy',
                 data: Fairy,
                 borderColor :['rgba(255, 192, 203, 1)'],
                 hidden: true
           }
        ]
     }
    var myChart = new Chart(ctx, {
      type: 'radar',data,
     options: {
        scales: {
           yAxes: [{
              ticks: {
                 beginAtZero:true
              }
           }]
        }
     }
     
  });