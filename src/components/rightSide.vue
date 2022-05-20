<template>
    <div id="right-column">
        <p>Ifeanyichukwu</p>
        <p>Okorie</p>
        <p>Electrical Engineering</p>
    </div>
    <div id="right-column2">
        <article class="container2">
            <section class="iconsndate">
                <i class="icons">&#128110;</i>
            </section>
            <section class="describe">
                <h2>About Me</h2>
                <p class="description">Detail-oriented and resourceful Engineer looking for a
                position as a junior Electrical Engineer at XYZ
                company. Looking forward to leveraging my working
                knowledge in Proteus, MATLAB, programming and
                electronics troubleshooting to help with your
                upcoming projects.</p>
            </section>
        </article>
        <article class="container2">
            <section class="iconsndate">
                <i class="icons">&#128110;</i>
                <h3>2019-present</h3>
            </section>
            <section class="describe">
                <h2>Experience</h2>
                <h3>Freelance Engineer | Installation,
                Troubleshooting And Repair Engineer</h3>
                <p class="description">Installed automatic gate controller.</p>
                <p class="description">Troubleshot for electrical faults in water filtration and
                pumping system.</p>
                <p class="description">Traced electrical wiring and conduit path under-roof
                for a Sound system</p>
                <p class="description">Traced for Car Battery discharge while vehicle is off.
                </p>
                <p class="description">Repaired faults in electrical fence</p>
                <p class="description">next</p>
            </section>
        </article>
        <article class="container2">
            <section class="iconsndate">
                <i class="icons">&#128110;</i>
                <h3>2016-present</h3>
            </section>
            <section class="describe">
                <h2>Education</h2>
                <h3>University Of Lagos | BSc Electrical
                Engineering</h3>
                <p class="description">Pursuing with a current CGPA of 4.33</p>
                <p class="description">Interested in Power, Electronics and control systems</p>
                <p class="description">next</p>
            </section>
        </article>
        <article class="container2">
            <section class="iconsndate">
                <i class="icons">&#128110;</i>
                <h3>10/09/2019-24/09/2019</h3>
            </section>
            <section class="describe">
                <h2>Projects</h2>
                <h3>UNILAG Engineering Faculty | Audible Water
                Detector</h3>
                <p class="description">The circuit detects the water level in a tank. The LED
                indicators informs the different water position and
                notifies with a beep when tank is full.</p>
                <p class="description">My Role : Soldering the electronic component to the
                vero board.</p>
            </section>
        </article>
        <article class="container2">
            <section class="iconsndate">
                <h3>10/08/2019-28/08/2019</h3>
            </section>
            <section class="describe">
                
                <h3>UNILAG Engineering Faculty | Visitor's Pass System</h3>
                <p class="description">The system operates with a card which allows a visitor access 
                to a door within a specified period of time and denies access at any other time.</p>
                <p class="description">Role : : Part of the team to provide 5 volts power supply
                for the project</p>
            </section>
        </article>
        
    </div>
</template>

<script>
export default {
    name:'rightSide'
   
}
</script>

<style scoped>
    #right-column{
        background:#000111;
        padding:10px 0px 15px 15%;

    }
    #right-column p{
        color:#ffffff;
        font-weight:500npm run servepx;
    }
    .container2{
        display:inline-flex;
        background: pink;
        height: auto;
        padding:5% 0%;
        text-align:center;
    }
    .container2 .iconsndate{
        background:green;
        width:30%;
    }
    .container2 .describe{
        display:block;
        background:purple;
        width:70%;
        text-align:left;


    }
    .description{
        background:red;
    }
    .icons{
        position:relative;
        top:20px;
    }
</style>