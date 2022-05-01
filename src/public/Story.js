import React from "react";
import NavigationBar from "./components/NavigationBar";

export default function Story() {
  return (
    <>
      <NavigationBar />
      <div className="my-5 container">
        <h1 style={{ fontSize: "50pt", color:'#1f4072', fontWeight:'700' }}>OUR STORY</h1>
        <p style={{ fontSize: "13pt", fontWeight:'700', color:'#1f4072' }}>
          It is OK to wait for your chances in life, <br /> but food? Food
          should come a little bit
          <br /> faster to my table!
        </p>

        <div className="row mx-2">
          <div
            className="col-md-6 col-sm-12 col-xs-12 text-white p-4"
            style={{ textAlign: "justify", background: "#1f4072" }}
          >
            <h3>What is the problem?</h3>
            <p>
              Have you been to a restaurant and one of these things happened to
              you?
            </p>
            <ol>
              <li>
                You struggle to and the waiter, then you stop one waiter and
                they come to your table
              </li>
              <li>
                You tell the waiter and he/she has to go back and fetch for the
                menu.
              </li>
              <li>
                You have the menu, the menu looks nice still you can't decide
                because you don't know what they have written.
              </li>
              <li>
                You ask the waiter to understand some of the food items
                provided, he/she tries to explain and you try to understand
              </li>
              <li>
                Finally, you place the order and you have to sit there waiting
                for your food.
              </li>
              <li>
                You sit there watching waiters delivering orders to other tables
                wishing your food to come a little bit faster as well, but well.
              </li>
              <li>
                The food is finally delivered to your table and you get to have
                the best time devouring your plate. For a couple of minutes, the
                World stops
              </li>
              <li>
                Then you are done and now you have to pay! And the struggle
                continues
              </li>
            </ol>

            <p>
              Some diners who are lucky and connected have experienced a few of
              these challenges (Lucky Bastard! Say it in your best Queens
              English). Many of us still experience these challenges to date.
              Well it is time to be the Lucky Bastards
            </p>
          </div>
          <div
            className="col-md-6 col-sm-12 col-xs-12 text-white p-4"
            style={{ textAlign: "justify", background: "#ec4d2b" }}
          >
            <h3>So what is our Solution?</h3>
            <p>
              or fast service, we can't rush the process and make every
              restaurant a drive-through or a McDonald kitchen? Creativity
              drives Chefs to create the best meals that customers will enjoy.
              We also understand how digital we have become during the pandemic
              as well as the reality of our city and that it does take time to
              get from one place to another.
            </p>
            <p>
              Our creativity stems from understanding the time we have to spare
              and we want to use it to allow our chefs to do what they do best
              so when we arrive at restaurants they are done preparing our meals
              and we are ready and HUGRRRY!
            </p>
            <p>
              So now with TAYARI, whether on a break, stuck in traffic, or
              riding the bus, place your order online through the TAYARI
              application quickly and painlessly.{" "}
              <span className="text-dark">
                You will love how easy we have made it to understand food items
                and order through our application
              </span>
            </p>
            <p>
              Orders will be collected by the restaurants for processing.
              Customers will be informed how long it will take for the order to
              be processed.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "justify", paddingTop: "4rem" }}>
          <h4>Let the magic happen!</h4>
          <p>
            Claim your time, you want to nish that meeting, writing, passing by
            that shop, get some stu or just to sit and catch up with friends.
            Just do you and come dine when the food is TAYARI!
          </p>
          <p>
            We believe waiters will work best with the help of a digital waiter
            at hand, in the future waiters will be busy taking orders from the
            kitchen to their customer’s tables. So next time boldly order your
            meals through our application and when the waiter asks you that
            famous question; Waiter: Samahani utapenda kuweka order gani
            leo?......... Mimi: Asante sana kwa kujali, nimeshaweka order yangu
            TAYARI (In your best smile)
          </p>
          <br />
          <br />
          <h4>Our Values</h4>
          <ul>
            <li>Trusting our Gut</li>
            <li>Giving people chances</li>
            <li>Peace and Happiness</li>
            <li>Innovation and Personal Development</li>
          </ul>
        </div>
      </div>
    </>
  );
}
