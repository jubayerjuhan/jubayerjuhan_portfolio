export const experienceQuery = `*[_type == "experiences"]
{
  ...,
  
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]
{
  ...,
  aboutMeTechnologies[] ->{
  name
  }
}`;

export const projectQuery = `*[_type == "projects"]
{
  ...,
   technologies[] -> {
     name
   } 
}`;
