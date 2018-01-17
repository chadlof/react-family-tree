import FamilyMemberPage from '../../components/WOMarriageAndStepChild'


const info = {
  
    familyMember: {
        name: 'Adam Cropper        ',
        birthDate: '1/15/1984'
    },
    children: [
        { name: 'Riley Cropper     ', href: '/ken/adam/riley'},
       
    ],
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

