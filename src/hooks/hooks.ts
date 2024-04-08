export function appendToBaseUrl( endpoint: string): string {
   console.log(process.env.NEXT_PUBLIC_APIBASEURL)
    return `${process.env.NEXT_PUBLIC_APIBASEURL}/${endpoint}`;
  }