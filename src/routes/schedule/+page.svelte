<script lang="ts">
  import CategoryBadge from '$lib/components/CategoryBadge.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import Card from '$lib/components/Card.svelte';

  import data from '../../drink-register.json';
  import donedrinks from '../../data.json';


  function getWeekNumber(date: Date): number {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7);
  }
  
  function generateFirstOddWeekThursday(offset: Int): Date {
    const currentDate = new Date();
    const stockholmOffset = 2; // Stockholm is UTC+2 in standard time (adjust for daylight saving time if applicable)
    
    // Adjust to Stockholm time
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth() + offset;
    const currentDay = currentDate.getUTCDate();
    const currentHour = currentDate.getUTCHours() + stockholmOffset;
    
    // Start from the first day of the current month
    let firstDayOfMonth = new Date(Date.UTC(currentYear, currentMonth, 1, currentHour));
    
    // Find the first Thursday in the month
    while (firstDayOfMonth.getUTCDay() !== 4 /* Thursday */) {
      firstDayOfMonth.setUTCDate(firstDayOfMonth.getUTCDate() + 1);
    }
    
    // Find the odd week
    while (getWeekNumber(firstDayOfMonth) % 2 !== 1) {
      firstDayOfMonth.setUTCDate(firstDayOfMonth.getUTCDate() + 7);
    }
    
    // Set time to midnight (00:00:00)
    firstDayOfMonth.setUTCHours(0, 0, 0, 0);
    
    if (firstDayOfMonth.getTime() < currentDate.getTime()) {
      return null;
    } else {
      return firstDayOfMonth;
    }
  }
  
  function getDrankDrink(drinkName) {
    return donedrinks.find(obj => obj.drink.toLowerCase() === drinkName.toLowerCase());
  }

  function formatDate(currentDate) {
    // Get the year, month, and date from the date object
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    let day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  function generateDatesForEntries(entries): Date[] {
    const result = [];

    let index = 0; 
    entries.forEach((entry, i) => {
      let scheduleDrink = {
        drink: entry.drink,
        category: entry.category, 
        done: false
      }

      const doneDrink = getDrankDrink(entry.drink)
      if (doneDrink == undefined) {
        let date = generateFirstOddWeekThursday(index);
        if (date == null) {
          index++
          date = generateFirstOddWeekThursday(index);
        }
        // result.push(date);
        if (i % 2 != 0) {
          index++
        }

        scheduleDrink.bar = entry.bar
        scheduleDrink.date = formatDate(date) 
        
      } else {
        scheduleDrink.done = true
        scheduleDrink.bar = doneDrink.bar
        scheduleDrink.date = doneDrink.date
      }
      result.push(scheduleDrink)
    });
    return result;
  }

  function generateLink(drinkName: string) {
    let dn = drinkName.toLowerCase()
    dn = dn.replaceAll(" ", "-")
    dn = dn.replaceAll("'", "")
    return "https://iba-world.com/" + dn
  }

  const formattedDrinks = generateDatesForEntries(data);
</script>

<!-- <PageTitle name="Schema"/> -->

<div class="pt-10">
  <Card title="Schema">
    <table class="bg-cardBg min-w-full text-sm md:text-base">
      <thead>
      </thead>
      <tbody>
        {#each formattedDrinks as d, idx}
          <tr class=" {d.done ? 'line-through' : ''}">
            <td>{d.date}</td>
            <td>
              <a href={generateLink(d.drink)} target="_blank" class="flex items-center">
                {d.drink}<CategoryBadge name={d.category} showFullName={false}/>
              </a>
            </td>
            <td>{d.bar}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Card>
</div>
