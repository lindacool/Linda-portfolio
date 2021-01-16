// I use this file to et up a real time listner to a certain collection
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getJobs = () => {
    const job = ref([])
    const error = ref(null)

     // This is were we fetch our data. a async function
     const load = async () => {
         try {
            console.log('hej rakke')
            //Loading spinner
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
            // Here i grab the data from my database firestore. I connect to my collection.
            const res = await projectFirestore.collection('jobs').get()
            // cycle through documents and for each of those documents get the data and add it to my job = ref([]) array
            job.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id} // This grabs the properties and spreds them as properties and values into new object. and i get the id so i can print them. 
                
            })
            

         }
        //  Here i catch the error
         catch(err) {

             error.value = err.message
            

         }

     }
    return { job, error, load }

}

export default getJobs