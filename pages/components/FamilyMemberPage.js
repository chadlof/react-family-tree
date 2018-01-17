import Link from 'next/link'
import FamilyMember from '../components/FamilyMember'
import Child from '../components/Child'

export default function(props) {
    const { mydata } = props
    const { familyMember, spouse, children, stepChildren } = mydata

    return (
        <body>
            <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
            <header>
                <h1><Link href='/index.js'><a>Lofgren Family Tree</a></Link></h1>
            </header>
            <section className="topSection">
                <FamilyMember name={familyMember.name} birthdate={familyMember.birthDate} />

                { spouse.name !== null ?
                <div className="married">
                    <h2 >Maried to:</h2>
                    <h3>Married on: {mydata.marriageDate}</h3>
                </div>
                : null}
              
                { spouse.name !== null ? <FamilyMember name={spouse.name} birthdate={spouse.birthDate} /> : null }
            </section>

            <section className='bio'>  
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium velit non nisi iaculis, fringilla interdum diam fermentum. Aliquam sit amet mi eu quam convallis vulputate a quis nulla. Phasellus pellentesque purus ut velit iaculis, efficitur posuere nunc ullamcorper. Vestibulum ac sodales neque, quis laoreet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec orci id libero ornare fringilla. Maecenas pellentesque est suscipit erat venenatis iaculis. Maecenas vestibulum nibh sit amet dolor posuere dapibus.
                </p>
                <p>
                    Pellentesque lacus arcu, hendrerit eu auctor sagittis, maximus eget nisi. Quisque convallis quam vel ante pellentesque, sit amet convallis libero elementum. Donec ac luctus tellus. Nullam vitae risus condimentum, elementum justo at, ultrices quam. Nulla laoreet, enim id congue condimentum, sem dolor porttitor nibh, a tempor felis augue nec nibh. Sed tristique, quam nec dictum tincidunt, sem odio elementum elit, eu scelerisque mi justo sit amet lorem. In feugiat elit eu ligula mattis molestie. Proin sed pulvinar eros. Integer in faucibus diam. Praesent molestie velit vitae fringilla tincidunt. Sed molestie ut nisl vel interdum. Aenean tempor risus mi. Maecenas aliquam elit ut viverra scelerisque. Morbi vulputate condimentum consequat. Nunc ut hendrerit sapien, ac tristique urna.
                </p>
             </section>

            
           <section>
               {children .name !== null ?
                <h2>Children:</h2>
                : null }
                {
                    children.map(function(child) {
                        return (
                            <Child name={child.name} href={child.href} />
                        )
                    })
                }
                { stepChildren.name !== null ?
                    <h2>Step children:</h2>
                      : null }
                {
                    stepChildren.map(function(child) {
                        return (
                            <Child name={child.name} href={child.href} />
                        )
                    })
                }
              


           </section>
        </body>
    )
}


