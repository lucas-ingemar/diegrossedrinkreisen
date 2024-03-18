<script>
  import DrinkParagraph from '$lib/views/DrinkParagraph.svelte';
  import {faMartiniGlassCitrus, faBeerMugEmpty} from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa';

  export let drinkData;

  function calculateAverageGrade(grades) {
    // Calculate the sum of all grades
    const totalGrades = Object.values(grades).reduce((acc, curr) => acc + curr, 0);
    
    // Calculate the average grade
    const averageGrade = totalGrades / Object.keys(grades).length;
    
    // Return the average grade
    return averageGrade;
  }

function formatGradesString(grades) {
    let formattedString = "";
    for (const student in grades) {
        if (grades.hasOwnProperty(student)) {
            formattedString += `${student.charAt(0)}:${grades[student]}, `;
        }
    }
    formattedString = formattedString.slice(0, -2);
    return formattedString;
}  
</script>

<a href={drinkData.ibaLink} target="_blank" class="mb-6 lg:m-2 flex flex-col items-start bg-cardBg border shadow md:flex-row md:max-w-xla hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border-b-1 border-classy-black lg:w-card w-full">
  <img
    class="object-cover w-full h-96 border-classy-black md:h-auto md:w-56 md:rounded-none md:border-r md:h-full"
    src={`drink-imgs/${drinkData.drink.toLowerCase().replaceAll(" ", "-")}.jpg`}
    alt=""
    />
  <div class="flex flex-col justify-between leading-normal w-full">

    <!-- Header -->
    <div class="pl-4 pr-2 py-2 flex justify-between bg-classy-black border-b-1 border-classy-gray text-cardBg">
      <div class="bg-blue-500a">
        <div class="flex mb-0 space-x-2 bg-blue-500a items-end">
          <h5 class="bg-green-500a text-3xl font-bold tracking-tight dark:text-white font-rancho">
            {drinkData.drink}
          </h5>
        </div>

        <p class="bg-red-500a pl-1 text-sm tracking-tight text-gray-400a dark:text-white">
          {drinkData.date} - {drinkData.bar}
        </p>
      </div>

      <div class="min-w-28 bg-green-500a py-2 flex flex-col justify-between">

       <div class="grid grid-cols-5 grid-rows-1 ">
         {#each {length: Math.floor(calculateAverageGrade(drinkData.grade)/2)} as _, i}
           <Fa icon={faMartiniGlassCitrus} />
         {/each}
       </div>
       <div class="grid grid-cols-5 grid-rows-1 ">
         {#each {length: Math.floor(drinkData.leviability)} as _, i}
           <Fa icon={faBeerMugEmpty} />
         {/each}
       </div>
      </div>

    </div>
    <div class="p-4">
        <DrinkParagraph title="Presentation" text={drinkData.presentation}/>
        <DrinkParagraph title="Lukt" text={drinkData.fragrance}/>
        <DrinkParagraph title="Smak" text={drinkData.taste}/>
        <DrinkParagraph title="Balans" text={drinkData.balance}/>
        <DrinkParagraph title="Övrigt" text={drinkData.other}/>
        <div class="flex space-x-4">
          <DrinkParagraph title="Betyg" text={formatGradesString(drinkData.grade)}/>
          <DrinkParagraph title="Hävabilitet" text={drinkData.leviability}/>
        </div>
    </div>
  </div>
</a>
