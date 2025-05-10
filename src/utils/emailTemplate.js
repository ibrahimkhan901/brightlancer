






export function generateEmailTemplate(courseApplyData) {
    return `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 8px; color: #333;">
                        
                                         <h2 style="color: #2e86de; text-align: center;">${courseApplyData.username} </h2>

                                        <h2 style="color: #2e86de; text-align: center;">Welcome to Brightlancers</h2>

                        <p>Congratulations! Your apply is submitted <strong>successfully</strong>.</p>

                        <p>Now we are sending you the payment method information.<br>
                        Please pay the course fee of <strong>${courseApplyData.AppliedCourse?.coursePrice}</strong>  for course <strong>${courseApplyData.AppliedCourse?.courseName}</strong>  using one of the following options to enroll:</p>

                        <h3>1. Physical Payment (Recommended)</h3>
                        <p>Visit our institute and pay physically at the front desk.</p>

                        <h3>2. Bank Account Details</h3>
                        <p><strong>Account Detail:</strong>       lkdjfl87jkj3hk3j4908798jlkjfl      </p>

                        <div style="background: #fff3cd; padding: 15px; border-left: 5px solid #ffc107; margin-top: 20px;">
                            <strong>Note:</strong>
                            <ul>
                            <li>If you pay via bank transfer, <strong>keep the slip as proof</strong>.</li>
                            <li>If payment proof is missing, <strong>you are fully responsible</strong> and we are unable to enroll in course. Thanks.</li>
                            </ul>
                        </div>

                        <p style="margin-top: 30px;">Thank you,<br><strong>Team Brightlancers</strong></p>
                        </div>
    `;
  }
  