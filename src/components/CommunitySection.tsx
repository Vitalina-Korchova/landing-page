import { motion } from "motion/react";

export default function CommunitySection() {
  return (
    <>
      <div className="community-section" id="community">
        <div className="circles">
          <div className="circle-1">
            <div className="circle-2">
              <div className="circle-3">
                <span>Join Our </span>
                <span>Community</span>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Us
                </motion.button>
              </div>
            </div>
            <div className="differenet-elements">
              <div data-aos="zoom-in" className="blob blob-el-1">
                <div></div>
                <div></div>
              </div>
              <div data-aos="zoom-in" className="blob blob-el-2">
                <div></div>
                <div></div>
              </div>
              <div data-aos="zoom-in" className="blob blob-el-3">
                <div></div>
                <div></div>
              </div>
              <div data-aos="zoom-in" className="blob blob-el-4">
                <div></div>
                <div></div>
              </div>

              <div data-aos="zoom-in" className="comments comment-1">
                <div>
                  <img src="./pic1.jpg" alt="coment1" />
                </div>
                <div>
                  <span>That was amazing! Great job!</span>
                  <span>Isla Beaumont</span>
                </div>
              </div>
              <div data-aos="zoom-in" className="comments comment-2">
                <div>
                  <img src="./pic2.jpg" alt="coment2" />
                </div>
                <div>
                  <span>Highly Recommended!</span>
                  <span>Evelyn Harrington</span>
                </div>
              </div>
              <div data-aos="zoom-in" className="comments comment-3">
                <div>
                  <img src="./pic3.jpg" alt="coment3" />
                </div>
                <div>
                  <span>The results are outstanding!</span>
                  <span>Clara Whitmore</span>
                </div>
              </div>
              <div data-aos="zoom-in" className="comments comment-4">
                <div>
                  <img src="./pic4.jpg" alt="coment4" />
                </div>
                <div>
                  <span>Nice work, love it!🔥</span>
                  <span>Carlos Sainz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
