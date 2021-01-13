// I use this file to et up a real time listner to a certain collection
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getEducation = () => {
    const education = ref([])
    const error = ref(null)

    // This is were i fetch our data. a async function
    const load = async () => {
        try
        {  
            //Loading spinner
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            // this creates a connection to my education collecton. and get() gets the data
            const resEducation = await projectFirestore.collection('education').get()

            console.log(resEducation ,'hello')
             // cycle through documents and for each of those documents get the data and add it to my education = ref([]) array
            education.value = resEducation.docs.map(doc => {
                return {...doc.data(), id:doc.id}// This grabs the properties and spreds them as properties and values into new object. and i get the id so i can print them. 
                
            })
        }
        catch (err) {
            error.value = err.message
        }
      
    }
    return {education, error, load}
}


export default getEducation