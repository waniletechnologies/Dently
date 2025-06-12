import React from 'react';

const SectionOne = () => {
	const SectionStyles = 'bg-white rounded-[10px] py-[17px] px-[24px]';
	const HeadingStyles = 'text-[#2E2E2E] font-semibold text-[16px]';
	const DescriptionStyles = 'mt-2 text-[#636363] text-[12px] font-normal';
	const SpanStyles = 'text-[#F68A1E] text-[12px] font-normal';
	return (
		<div className="flex flex-col mt-[32px] gap-4">
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>INTRODUCTION</h1>
				<p className={DescriptionStyles}>
					Hi <span className={SpanStyles}>PATIENT NAME</span>, it&apos;s{' '}
					<span className={SpanStyles}>YOUR NAME</span> calling from{' '}
					<span className={SpanStyles}>PRACTICE NAME</span>. How are you today?{' '}
					<br />
					Before we go any further, I&apos;d just like to let you know that all
					our calls are recorded for training and monitoring purposes.
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>FACT FINDING</h1>
				<p className={DescriptionStyles}>
					First things first, let&apos;s delve into what aspects of your smile
					you&apos;d like to enhance.  <br />{' '}
					<span className={SpanStyles}>
						Write down exactly what they tell you. Gather as much info as
						possible to use later.
					</span>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>REASON FOR CHANGE</h1>
				<p className={DescriptionStyles}>
					What&apos;s motivating you to enhance your smile now? 
					<br /> Is it for a special occasion or simply to boost your
					confidence?  <br />
					How does your smile make you feel now? And what changes are you hoping
					to achieve? <br />{' '}
					<span className={SpanStyles}>
						{' '}
						&quot;Don&apos;t worry, our dentists won&apos;t just enhance your
						smile but your confidence too&quot;.
					</span>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>REASON FOR CHOOSING US</h1>
				<p className={DescriptionStyles}>
					Rest assured you&apos;ve come to the right place! Do you mind if I ask
					what made you choose YDS? <br />
					<span className={SpanStyles}>
						{' '}
						Reaffirm why they made the right choice by telling them{' '}
						<strong> YOUR PRACTICE&apos;S UNIQUE SELLING POINTS </strong> <br />{' '}
						What makes your practice different from the practice down the
						street? <br />
						What do patients compliment you the most on – your dentists, the
						environment, the location? <br />
						How many 5 star reviews do you have? <br /> Is the patient nervous
						about visiting the dentist? If so, reassure them that there&apos;s
						nothing to worry about - you&apos;re different, less clinical, warm
						and friendly
					</span>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>FUNDING</h1>
				<p className={DescriptionStyles}>
					If we can facilitate the smile you want, have you thought about how
					you might fund it? For example, savings or finance etc. <br /> Just to
					make you aware, we have multiple finance options available including
					interest free. There are also other arrangements we can make,
					depending on the treatment and your circumstances. All of this and
					more will be discussed at your first consultation. {' '}
					<span className={SpanStyles}>
						If they have savings, you can discuss this later.
					</span>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>THE CONSULTATION FEE</h1>
				<p className={DescriptionStyles}>
					As we are a private dental practice, we do charge a small fee for the
					initial consultation. However, there is a lot of value in this. The
					fee depends on the consultation/treatment you need, so I'll run
					through this with you later in the call.
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>TRIAL CLOSE</h1>
				<p className={DescriptionStyles}>
					If we were to make a booking for you today, do you have payment
					details to hand? Not to worry if you don&apos;t, we also take Apple
					Pay and bank transfers too, hopefully one of these options is
					available to you?
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>PRESENTING THE TREATMENT</h1>
				<p className={DescriptionStyles}>
					Let&apos;s walk through some treatment options, including some rough
					pricing and the process involved. <br />
					<span className={SpanStyles}>
						Every presentation should be unique to the patient&apos;s needs,
						motivation, time-frame budget etc. Use what you have learned about
						them to present their options. <br />
						Build value and trust in the dentist/practice. <br />
						Use the features and benefits documents for our products, but tailor
						them to the customers wants/needs. <br />{' '}
						<strong>DON&apos;T JUST LIST EVERYTHING WITHOUT REASON</strong> –
						tell them why a particular treatment would be great for their
						requirements. <br />
						<strong> DON&apos;T GIVE THEM EXACT PRICES </strong>– this is the
						dentists job. Give them rough pricing, including a rough monthly
						figure if they were to choose finance. <br />{' '}
						<strong>TRY TO OPEN UP MULTIPLE TREATMENT OPTIONS</strong> – many
						people will have a treatment in mind; however, they may not know a
						lot about what they are asking for. <br />
						<strong>
							{' '}
							YOUR JOB IS TO SELL THE CONSULTATION FEE, NOT THE TREATMENT
						</strong>{' '}
						– let them know that the dentist will endeavour to facilitate a
						treatment based on them, their budget and timeframe and of course
						the smile that they want. It&apos;s all about them, every smile is
						different.
					</span>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>BUILDING VALUE IN THE CONSULTATION</h1>
				<p className={DescriptionStyles}>
					Your consultation will include:
					<li>
						45 minutes with one of the UK&apos;s leading experts in{' '}
						<span className={SpanStyles}> TREATMENT TYPE</span>
					</li>
					<li>
						X-Rays and scans (if they are having implants then they will also
						have a bone density/CT scan)
					</li>
					<li>
						A full understanding of your mouth and oral health and what you can
						do moving forward to get your desired result
					</li>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>ASSUMPTIVE CLOSE</h1>
				<p className={DescriptionStyles}>
					Based on everything you have told me I&apos;m assuming you&apos;re
					keen to see us. When would be the most convenient time for your
					initial consultation? We have practices in{' '}
					<span className={SpanStyles}>LOCATION</span>.
					<br />
					<p className={`${SpanStyles} py-8`}>
						Stay quiet until they say yes or object
					</p>{' '}
					Based on your preferences, your chosen dentist is{' '}
					<span className={SpanStyles}>DENTIST NAME</span> and is known for
					their expertise in
					<span className={SpanStyles}>TREATMENT</span>. Check out our social
					media as you may even spot your dentist in a video doing what they do
					best (just to put your mind at rest that you're in great hands).{' '}
					<br />
					<p className="py-8">Does the proposed date and time work for you? </p>
					Fantastic! Your perfect smile is just a few steps away. To secure your
					appointment we require a <span className={SpanStyles}>£COST</span>{' '}
					consultation fee, which will be deducted from your treatment plan.{' '}
					<p className="py-8">
						The fee is non-refundable; however, appointments can be rescheduled
						if more than 24 hours&apos; notice is provided.
					</p>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>PAYMENT</h1>
				<p className={DescriptionStyles}>
					You&apos;ve already mentioned you'd like to pay by{' '}
					<span className={SpanStyles}>PAYMENT METHOD</span>, I just need to
					process this, and you&apos;re all booked in. <br />{' '}
					<p className={SpanStyles}>
						{' '}
						Prior to the debit card details being provided:
					</p>{' '}
					<li className={SpanStyles}>
						Inform the customer that you will pause the recording while they are
						being read out
					</li>
					<li className={SpanStyles}>PAUSE RECORDING</li>
					<li className={SpanStyles}>
						Set to record again once the bank details have been take
					</li>
				</p>
			</section>
			<section className={SectionStyles}>
				<h1 className={HeadingStyles}>CONSOLIDATION</h1>
				<p className={DescriptionStyles}>
					Thanks for booking in with us. I&apos;m excited to hear about how your
					journey goes and if you need anything else or know of anyone else that
					would like to book in, please contact me.
				</p>
			</section>
		</div>
	);
};

export default SectionOne;
