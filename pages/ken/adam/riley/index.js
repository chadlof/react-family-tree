import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Riley Cropper   ',
        birthDate: '3/31/2005 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

