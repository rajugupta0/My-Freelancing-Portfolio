import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">Terms of Service</h1>
				</div>
				<div className="tos__body padding">
					<p className="document">
					

<h2>1. Terms</h2>
<br></br>
<p>By accessing this Website, accessible from https://side.codewithme.live, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
<br></br>
<h2>2. Use License</h2>
<br></br>
<p>Permission is granted to temporarily download one copy of the materials on Side View's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

<ul>

    <li>modify or copy the materials;</li>
    <li>use the materials for any commercial purpose or for any public display;</li>
    <li>attempt to reverse engineer any software contained on Side View's Website;</li>
    <li>remove any copyright or other proprietary notations from the materials; or</li>
    <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
</ul>

<p>This will let Side View to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>
<br></br>
<h2>3. Disclaimer</h2>
<br></br>
<p>All the materials on Side View's Website are provided "as is". Side View makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Side View does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
<br></br>
<h2>4. Limitations</h2>
<br></br>
<p>Side View or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Side View's Website, even if Side View or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
<br></br>
<h2>5. Revisions and Errata</h2>
<br></br>
<p>The materials appearing on Side View's Website may include technical, typographical, or photographic errors. Side View will not promise that any of the materials in this Website are accurate, complete, or current. Side View may change the materials contained on its Website at any time without notice. Side View does not make any commitment to update the materials.</p>
<br></br>
<h2>6. Links</h2>
<br></br>
<p>Side View has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Side View of the site. The use of any linked website is at the user's own risk.</p>
<br></br>
<h2>7. Site Terms of Use Modifications</h2>
<br></br>
<p>Side View may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
<br></br>
<h2>8. Your Privacy</h2>
<br></br>
<p>Please read our Privacy Policy.</p>
<br></br>
<h2>9. Governing Law</h2>
<br></br>
<p>Any claim related to Side View's Website shall be governed by the laws of in without regards to its conflict of law provisions.</p>
					</p>
				</div>
			</div>
		</>
	);
}
import "./TermsAndService.scss";

export default TermsAndService;
