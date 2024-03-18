<script lang="ts">
  export let name;
  export let showFullName;

  function formatName(fullName: string) {
    if (showFullName) {
      return fullName
    } else {
      return fullName.match(/\b(\w)/g).join('');
    }
  }

  function badgeColor(fullName: string) {
    switch (fullName) {
      case "Unforgettables":
        return "bg-green-500"
      case "New Era":
        return "bg-red-500"
      case "Contemporary Classics":
        return "bg-gray-500"
      default:
        return "bg-blue-500"
    }
  }
  
</script>

<div class="w-7a ml-2 px-1 text-xs rounded-full text-center {badgeColor(name)}">
  {formatName(name)}
</div>
