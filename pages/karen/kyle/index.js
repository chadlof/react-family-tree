import FamilyMemberPage from '../../components/WOChild'


const info = {
    marriageDate: '10/4/2013',
    familyMember: {
        name: 'Kyle Aaron Bell ',
        birthDate: '3/4/1979'
    },
    spouse: {
        name: 'Katherine',
        birthDate: null
    },

}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

