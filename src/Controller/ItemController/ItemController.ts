import {} from "../../Services";

class OnBoardingController {
  public static getInstance(): OnBoardingController {
    if (!OnBoardingController.instance) {
      OnBoardingController.instance = new OnBoardingController();
    }
    return OnBoardingController.instance;
  }
  private static instance: OnBoardingController;

  public async onBoarding({ body }: any) {
    try {
      const { tenantName, userData } = body;
      return await onBoardingService.onBoarding(tenantName, userData);
    } catch (error) {
      throw error;
    }
  }
}

export default OnBoardingController.getInstance();
