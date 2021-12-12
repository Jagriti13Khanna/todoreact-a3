import Link from 'next/link'
import { Button } from 'ui/buttons';

import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import {Title} from "ui/title"
import {PageLayout, PageHeader, PageFooter, PageBody} from 'layouts/loginpage'



function ToDoPage(props) {
   const user = useAuth()

   if (user) {
    return (
      <>
        <AppBar />
        <PageLayout>
        <PageHeader>
          
          <Link href="/add-item">
             <Button bgcolor="#0fa9ec" color="#ffffff">Add A To Do List</Button>
        </Link>
        </PageHeader>
         
        </PageLayout>
      </>
    )
   }
    return (
      <>
        <AppBar />
        <Title> Please Go Away</Title>
      </>
    )
  
}

export default ToDoPage;