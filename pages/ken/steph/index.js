import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: '10/22/2016  ',
    familyMember: {
        name: 'Stephanie A "Lofgren" Torson  ',
        birthDate: ' 9/24/1979'
    },
    spouse: {
        name: 'Todd Torson ',
        birthDate: '12/20/78'
    },
    children: [
        { name: 'Connor Rekdahl', href: '/ken/steph/connor'},
        { name: 'Kayla Rekdahl  ', href:'/ken/steph/kayla' }
    ],
    
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

